package com.dest1.sephora.controller;

import com.dest1.sephora.entities.Sephora;
import com.dest1.sephora.repositories.SephoraRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/sephora")
public class SephoraController {

    private final SephoraRepository repository;

    public SephoraController(SephoraRepository repository) {
        this.repository = repository;
    }
    @GetMapping
    public List<Sephora> mostrar(){
        return repository.findAll();
    }

    @PostMapping
    public void criar(@RequestBody Sephora s){
        repository.save(s);
    }

}
