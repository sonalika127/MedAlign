package jfsd.project.authservices;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class AuthServicesApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuthServicesApplication.class, args);
    }
}
