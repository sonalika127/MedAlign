package com.healthcare.appointmentscheduling.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;
import jakarta.servlet.http.HttpServletResponse;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private static final Logger logger = LoggerFactory.getLogger(SecurityConfig.class);

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
//            .csrf(csrf -> csrf.disable()) // Disable CSRF for testing; configure as needed
//            .authorizeHttpRequests(authorize -> authorize
//                .requestMatchers("/appointments/**").permitAll() // Allow access to /appointments endpoints
//                .requestMatchers("/doctors/**").permitAll() // Allow access to /doctors endpoints
//                .anyRequest().authenticated() // Require authentication for other endpoints
//            )
        
        .csrf(csrf -> csrf.disable()) // Disable CSRF for testing
        .authorizeHttpRequests(authorize -> authorize
            .anyRequest().permitAll() // Allow all requests
        )

            .exceptionHandling(exceptions -> exceptions
                .authenticationEntryPoint((request, response, authException) -> {
                    logger.error("Unauthorized error: {}", authException.getMessage());
                    response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "Unauthorized");
                })
                .accessDeniedHandler((request, response, accessDeniedException) -> {
                    logger.error("Access denied error: {}", accessDeniedException.getMessage());
                    response.sendError(HttpServletResponse.SC_FORBIDDEN, "Access Denied");
                })
            );

        return http.build();
    }
}
