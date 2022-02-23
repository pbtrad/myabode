import React, { Component } from 'react';
import { Route, Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRoute = ({ children}) => {
    const isAuthenticated = true;
        
    if (isAuthenticated ) {
      return children
    }
      
    return <Navigate to="/login" />
  }

  export default PrivateRoute;