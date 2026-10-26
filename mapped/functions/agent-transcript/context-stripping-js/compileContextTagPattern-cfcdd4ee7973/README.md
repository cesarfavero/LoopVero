# `compileContextTagPattern`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/transcripts/README.md).

**Módulo:** `agent-transcript/context-stripping.js` · [README do módulo](../../../../modules/agent-transcript/context-stripping-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509488-509490](../../../../../reference/runtime/host-main.cjs#L509488-L509490) | `FunctionDeclaration` | não | `tag` |
| [evaluation:294666-294668](../../../../../reference/runtime/sand-eval-runner.cjs#L294666-L294668) | `FunctionDeclaration` | não | `tag` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509488-509490](../../../../../reference/runtime/host-main.cjs#L509488-L509490) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:294666-294668](../../../../../reference/runtime/sand-eval-runner.cjs#L294666-L294668) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509488

Chamadas escritas diretamente neste corpo: `new RegExp`.

SHA-256 do trecho: `574d6eaef0e240f663c6f1fec9da11edef86179039df10c3635a4a328b7dd010`.

### evaluation:294666

Chamadas escritas diretamente neste corpo: `new RegExp`.

SHA-256 do trecho: `574d6eaef0e240f663c6f1fec9da11edef86179039df10c3635a4a328b7dd010`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
