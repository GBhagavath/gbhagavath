import { PortfolioHttpService } from '../portfolio.http.service';
import { Project } from './projects.model';

export class ProjectService {
    constructor(httpService: PortfolioHttpService){}

    private projects: Project[] = [
        new Project("https://turvo.com/product", "Turvo", 
        "Turvo is a product that gives a real time solution for the logistics"+
        "platform using Shipper, Broker and Carrier, with real-time tracking"+
        "of shipments. The product uses Telematics devices to track the"+
        "shipment and give the real time updates on the platform. The"+
        "application completes the shipments based on geo-fence, the "+
        "invoice will be sent across the consumers.", "Java, Spring Boot, MongoDB, MySQL, RabbitMQ, Kibana", "2019"),
        new Project("https://turvo.com/product", "Turvo", 
        "Turvo is a product that gives a real time solution for the logistics"+
        "platform using Shipper, Broker and Carrier, with real-time tracking"+
        "of shipments. The product uses Telematics devices to track the"+
        "shipment and give the real time updates on the platform. The"+
        "application completes the shipments based on geo-fence, the "+
        "invoice will be sent across the consumers.", "Java, Spring Boot, MongoDB, MySQL, RabbitMQ, Kibana", "2019")
    ]

    getProjects(){
        return this.projects.slice();
    }
}