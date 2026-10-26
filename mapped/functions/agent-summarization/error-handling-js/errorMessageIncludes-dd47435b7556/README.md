# `errorMessageIncludes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620127-620135](../../../../../reference/runtime/host-main.cjs#L620127-L620135) | `FunctionDeclaration` | não | `error64, needle` |
| [evaluation:304481-304489](../../../../../reference/runtime/sand-eval-runner.cjs#L304481-L304489) | `FunctionDeclaration` | não | `error63, needle` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620127-620135](../../../../../reference/runtime/host-main.cjs#L620127-L620135) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304481-304489](../../../../../reference/runtime/sand-eval-runner.cjs#L304481-L304489) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:620127

Chamadas escritas diretamente neste corpo: `.includes`, `current2.message.toLowerCase`, `iterateErrorChain`, `needle.toLowerCase`.

SHA-256 do trecho: `c7c9fcd8fa4cd6e5eb78aa06d63ae54ea0d7ca8bf9abd217d0dca09fdc666642`.

### evaluation:304481

Chamadas escritas diretamente neste corpo: `.includes`, `current2.message.toLowerCase`, `iterateErrorChain`, `needle.toLowerCase`.

SHA-256 do trecho: `03a545a89c57659f89ead0f2ff9cf27a236b7182d23c23a92c1920b5c7b6ed9c`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
