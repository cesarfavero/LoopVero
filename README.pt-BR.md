# LoopVero · Inside the Harness

[English](README.md) · [Português (Brasil)](README.pt-BR.md) · [Español](README.es.md) · [简体中文](README.zh-CN.md)

**Sabe aquele bot que chamam de “o melhor do mundo”? Imagine poder acompanhar a engrenagem por trás da resposta.**

LoopVero é um estudo de um harness de agentes com referências diretas ao código: ferramentas, memória, checkpoints, subagentes e os mecanismos visíveis por trás do trabalho proativo. Explore os arquivos de referência, consulte o mapa de funções e veja até onde a evidência permite chegar.

**1.070 arquivos originais · 19.741 ocorrências de funções nomeadas · 14.935 fichas de referência de funções.**

Os arquivos de referência são a fonte de verdade: o guia explica o que eles implementam, as fichas mapeiam suas funções e cada conclusão aponta para o código que a sustenta.

Este é um estudo estático dos artefatos disponíveis, não um agente instalável nem uma descrição garantida do sistema completo em produção.

O aplicativo reconstruído, o frontend e seus testes foram retirados. A estrutura usa nomes próprios em inglês, sem instruções de obtenção dos arquivos ou de reprodução de uma extração.

## Comece aqui

1. [Guia completo](guide/README.md): percurso de leitura, responsabilidades e contratos.
2. [Arquitetura de ponta a ponta](guide/architecture/README.md): host, gateway, execução remota, executor de avaliação e persistência.
3. [Proatividade](guide/components/proactivity/README.md): disparo, automações, executor silencioso, WakeParent e limites da evidência.
4. [Conclusões verificadas](guide/findings/README.md): o que muda a interpretação do harness.
5. [Mapa completo de módulos e funções](mapped/README.md): uma ficha README para cada função nomeada catalogada.

## Organização

| Pasta | Conteúdo | Como usar |
| --- | --- | --- |
| [reference](reference/README.md) | Arquivos originais, com seus bytes preservados e pastas reorganizadas | Evidência primária |
| [guide](guide/README.md) | Explicações manuais, decisões, fluxos, algoritmos e diagramas | Entender comportamento |
| [mapped](mapped/README.md) | READMEs por módulo e função, parâmetros, chamadas e localização | Navegar pela implementação |
| [tools/research](tools/research/README.md) | Indexação AST, geração e verificação estática | Reproduzir o mapa a partir das referências já presentes |

## Três conclusões fundamentais

**O host não oferece um loop BOX local ativo nessa entrada.** `SendPipeline.sendPrompt` retorna sem trabalho para prompt vazio e sem anexos; uma entrada efetiva encontra a recusa BOX, incluindo `refuseBoxTurn`, que lança `SandBoxHarnessRetiredError`. Para agentes marcados como `temporal`, o gateway usa um proxy de ações e transcripts remotos. Isso foi verificado no código, não deduzido pelo nome das classes. [Gateway](guide/components/gateway/README.md), [turnos](guide/components/turns/README.md).

**O executor de avaliação contém implementações concretas do loop.** Seu caminho liga a criação de sessão, composição de ferramentas, streaming, checkpoints, subagentes e encerramento. Ele permite estudar o funcionamento que está presente no artefato, sem provar que a produção utiliza exatamente essa configuração. [Inferência](guide/components/inference/README.md).

**Proatividade é uma cadeia de responsabilidades.** Há código concreto de automação, execução silenciosa e comunicação com o pai. A seleção inicial de oportunidades espontâneas e o agendamento remoto completo não foram encontrados nas referências disponíveis. `WakeParent` não deve ser confundido com o algoritmo que decide investigar uma oportunidade. [Proatividade](guide/components/proactivity/README.md).

## Cobertura e rigor

- 1.070 arquivos originais mantidos com o mesmo Git blob SHA-1. Apenas as pastas foram reorganizadas; metadados do Finder e um marcador vazio foram retirados.
- 3 bundles centrais analisados por AST, com 1.466 módulos selecionados.
- 19.741 ocorrências de funções nomeadas, agrupadas em 14.935 fichas README. Métodos e closures nomeadas estão incluídos; callbacks anônimos não recebem ficha própria.
- Os guias funcionais são análises manuais. As fichas geradas registram fatos sintáticos e não afirmam validação semântica completa ou execução em produção.
- O snapshot está associado ao commit `655acca99bff0d17466547611108f94ed6a8a5e7`. O marcador original de build contém `fcbae14`; ele não foi convertido em uma versão de produto presumida.

Consulte [método e limites](guide/methodology/README.md) e [cobertura](guide/coverage/README.md). Os nomes internos dos símbolos continuam preservados: são necessários para rastrear o código original com precisão.

## Verificar o estudo

```bash
npm ci --prefix tools/research --ignore-scripts
node --expose-gc --max-old-space-size=4096 tools/research/index-harness.cjs
python3 tools/research/render-catalog.py
python3 tools/research/verify-reference.py
```

Esses comandos leem e analisam arquivos. Não inicializam o host, não abrem sessões de inferência e não executam os bundles originais.

