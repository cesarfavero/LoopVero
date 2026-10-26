# `isUnsupportedRegionError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620169-620171](../../../../../reference/runtime/host-main.cjs#L620169-L620171) | `FunctionDeclaration` | não | `error64` |
| [evaluation:304523-304525](../../../../../reference/runtime/sand-eval-runner.cjs#L304523-L304525) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620169-620171](../../../../../reference/runtime/host-main.cjs#L620169-L620171) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304523-304525](../../../../../reference/runtime/sand-eval-runner.cjs#L304523-L304525) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620169

Chamadas escritas diretamente neste corpo: `errorTextIncludes`.

SHA-256 do trecho: `e1c2a8450ccf4ed2032967964406deb1045ecd677d4430d703079e08d1d4c540`.

### evaluation:304523

Chamadas escritas diretamente neste corpo: `errorTextIncludes`.

SHA-256 do trecho: `b3de1773f8650fc6915d93beb258f8fe9f99944bddea486cca316f0842af809a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
