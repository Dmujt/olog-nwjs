"use strict";

module.exports = {
    'ad' : {
        "url": "ldap://your/service",
        "adminDn": "cn=svc_cf-user,ou=Service Accounts,dc=...",
        "adminPassword": "password",
        "searchBase": "ou=...,dc=...",
        "searchFilter": "(&(objectClass=user)(sAMAccountName=_id)(company=FRIB))",
        "nameFilter": "(&(objectClass=user)(displayName=_name)(company=FRIB))",
        "groupSearchBase": "ou=...,dc=...",
        "groupSearchFilter": "(&(objectClass=group)(sAMAccountName=_id))",
        "objAttributes": ["sAMAccountName","displayName","company", "mail", "telephoneNumber", "mobile", "physicalDeliveryOfficeName"],
        "memberAttributes": ["sAMAccountName","displayName","company", "mail", "telephoneNumber", "mobile", "physicalDeliveryOfficeName", "memberOf"],
        "groupAttributes": ["sAMAccountName","displayName","mail"],
        "rawAttributes": ["thumbnailPhoto"]
    },
    'auth' : {
        "cas": "https://liud-dev.nscl.msu.edu/cas",
        "service": "http://localhost:3003/",
        "login_service": "http://localhost:3003/login"
    }

};