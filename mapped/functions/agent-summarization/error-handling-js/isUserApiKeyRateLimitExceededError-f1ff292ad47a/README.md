# `isUserApiKeyRateLimitExceededError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620172-620174](../../../../../reference/runtime/host-main.cjs#L620172-L620174) | `FunctionDeclaration` | não | `error64` |
| [evaluation:304526-304528](../../../../../reference/runtime/sand-eval-runner.cjs#L304526-L304528) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620172-620174](../../../../../reference/runtime/host-main.cjs#L620172-L620174) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304526-304528](../../../../../reference/runtime/sand-eval-runner.cjs#L304526-L304528) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620172

Chamadas escritas diretamente neste corpo: `errorMessageIncludes`.

SHA-256 do trecho: `6a762dde1f47094f724e6868a108b24015b27615e29e3f96d24a4688221e026e`.

### evaluation:304526

Chamadas escritas diretamente neste corpo: `errorMessageIncludes`.

SHA-256 do trecho: `c4cbe75c6ac7b2ff9894d40b3be43b6e12b14fb0146e29af12c5d19ee30465ff`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
