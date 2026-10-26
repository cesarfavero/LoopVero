# `isInvalidArgumentError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620166-620168](../../../../../reference/runtime/host-main.cjs#L620166-L620168) | `FunctionDeclaration` | não | `error64` |
| [evaluation:304520-304522](../../../../../reference/runtime/sand-eval-runner.cjs#L304520-L304522) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620166-620168](../../../../../reference/runtime/host-main.cjs#L620166-L620168) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304520-304522](../../../../../reference/runtime/sand-eval-runner.cjs#L304520-L304522) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620166

Chamadas escritas diretamente neste corpo: `errorTextIncludes`.

SHA-256 do trecho: `f116a2333e148e229a43120156bc8879f176538ba0b692c5e181161099db38ac`.

### evaluation:304520

Chamadas escritas diretamente neste corpo: `errorTextIncludes`.

SHA-256 do trecho: `d385b667de492e7a314e5124f55e31f93e52873d9e178e5a1dd912b1641a9efd`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
