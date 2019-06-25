package hello;

import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.*;

@RestController
public class GreetingController {

    private static final String template = "Hello, %s!";
    private final AtomicLong counter = new AtomicLong();


    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("/greeting")
    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
        Greeting newGreeting = new Greeting(counter.incrementAndGet(), String.format(template, name));
        return newGreeting;
    }
}
