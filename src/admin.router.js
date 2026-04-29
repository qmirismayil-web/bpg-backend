const { default: AdminBro } = require('admin-bro');
const { buildAuthenticatedRouter } = require('admin-bro-expressjs');
const express = require('express');
const argon2 = require('argon2');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);

const { Company } = require('./companies/company.entity');

/**
 * @param {AdminBro} admin
 * @return {express.Router} router
 */
const buildAdminRouter = (admin) => {
   const router = buildAuthenticatedRouter(admin, {
      cookieName: 'admin-bro',
      cookiePassword: 'superlongandcomplicatedname',
      authenticate: async (email, password) => {
         const company = await Company.findOne({ email });

         if (company && company.encryptedPassword) {
            try {
               if (await argon2.verify(company.encryptedPassword, password)) {
                  return company.toJSON();
               }
            } catch (err) {
               console.error('Password verification error:', err);
            }
         }
         return null;
      },
   }, null, {
      resave: false,
      saveUninitialized: true,
      store: new MongoStore({ mongooseConnection: mongoose.connection })
   });
   return router;
};

module.exports = buildAdminRouter;