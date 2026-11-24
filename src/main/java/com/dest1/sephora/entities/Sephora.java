package com.dest1.sephora.entities;

import jakarta.persistence.*;


@Table(name ="tb_sephora")
@Entity
public class Sephora {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String email;
    private String senha;
    private String apelido;
    private String nomeDaMarca;
    private String nomeDoProfissional;
    private String nomeproduto;
    private String classificacaoProduto;
    private String descricaoDoProduto;
    private float preco;
    private int avaliacao;
    private String estoque;
    private String opcoes;
    private String quantidadeParaAdicionar;

    public Sephora(){}

    public Sephora(String email, String senha, String apelido, String nomeDaMarca, String nomeDoProfissional, String produto, String classificacaoProduto, String descricaoDoProduto, float preco, int avaliacao, String estoque, String opcoes, String quantidadeParaAdicionar) {
        this.email = email;
        this.senha = senha;
        this.apelido = apelido;
        this.nomeDaMarca = nomeDaMarca;
        this.nomeDoProfissional = nomeDoProfissional;
        this.nomeproduto = produto;
        this.classificacaoProduto = classificacaoProduto;
        this.descricaoDoProduto = descricaoDoProduto;
        this.preco = preco;
        this.avaliacao = avaliacao;
        this.estoque = estoque;
        this.opcoes = opcoes;
        this.quantidadeParaAdicionar = quantidadeParaAdicionar;
    }

    public Sephora(int id, String email, String senha, String apelido, String nomeDaMarca, String nomeDoProfissional, String produto, String classificacaoProduto, String descricaoDoProduto, float preco, int avaliacao, String estoque, String opcoes, String quantidadeParaAdicionar) {
        this.id = id;
        this.email = email;
        this.senha = senha;
        this.apelido = apelido;
        this.nomeDaMarca = nomeDaMarca;
        this.nomeDoProfissional = nomeDoProfissional;
        this.nomeproduto = produto;
        this.classificacaoProduto = classificacaoProduto;
        this.descricaoDoProduto = descricaoDoProduto;
        this.preco = preco;
        this.avaliacao = avaliacao;
        this.estoque = estoque;
        this.opcoes = opcoes;
        this.quantidadeParaAdicionar = quantidadeParaAdicionar;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSenha() {
        return senha;
    }

    public void setSenha(String senha) {
        this.senha = senha;
    }

    public String getApelido() {
        return apelido;
    }

    public void setApelido(String apelido) {
        this.apelido = apelido;
    }

    public String getNomeDaMarca() {
        return nomeDaMarca;
    }

    public void setNomeDaMarca(String nomeDaMarca) {
        this.nomeDaMarca = nomeDaMarca;
    }

    public String getNomeDoProfissional() {
        return nomeDoProfissional;
    }

    public void setNomeDoProfissional(String nomeDoProfissional) {
        this.nomeDoProfissional = nomeDoProfissional;
    }

    public String getNomeproduto() {
        return nomeproduto;
    }

    public void setNomeproduto(String nomeproduto) {
        this.nomeproduto = nomeproduto;
    }

    public String getClassificacaoProduto() {
        return classificacaoProduto;
    }

    public void setClassificacaoProduto(String classificacaoProduto) {
        this.classificacaoProduto = classificacaoProduto;
    }

    public String getDescricaoDoProduto() {
        return descricaoDoProduto;
    }

    public void setDescricaoDoProduto(String descricaoDoProduto) {
        this.descricaoDoProduto = descricaoDoProduto;
    }

    public float getPreco() {
        return preco;
    }

    public void setPreco(float preco) {
        this.preco = preco;
    }

    public int getAvaliacao() {
        return avaliacao;
    }

    public void setAvaliacao(int avaliacao) {
        this.avaliacao = avaliacao;
    }

    public String getEstoque() {
        return estoque;
    }

    public void setEstoque(String estoque) {
        this.estoque = estoque;
    }

    public String getOpcoes() {
        return opcoes;
    }

    public void setOpcoes(String opcoes) {
        this.opcoes = opcoes;
    }

    public String getQuantidadeParaAdicionar() {
        return quantidadeParaAdicionar;
    }

    public void setQuantidadeParaAdicionar(String quantidadeParaAdicionar) {
        this.quantidadeParaAdicionar = quantidadeParaAdicionar;
    }
}
