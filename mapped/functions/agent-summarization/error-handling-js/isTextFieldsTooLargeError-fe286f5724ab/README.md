# `isTextFieldsTooLargeError`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620160-620162](../../../../../reference/runtime/host-main.cjs#L620160-L620162) | `FunctionDeclaration` | não | `error64` |
| [evaluation:304514-304516](../../../../../reference/runtime/sand-eval-runner.cjs#L304514-L304516) | `FunctionDeclaration` | não | `error63` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620160-620162](../../../../../reference/runtime/host-main.cjs#L620160-L620162) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:304514-304516](../../../../../reference/runtime/sand-eval-runner.cjs#L304514-L304516) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:620160

Chamadas escritas diretamente neste corpo: `errorTextIncludes`.

SHA-256 do trecho: `48b3e430e67a831b8243187990c51a6615baaec0cd3ec9b894681b610bf694d5`.

### evaluation:304514

Chamadas escritas diretamente neste corpo: `errorTextIncludes`.

SHA-256 do trecho: `cc9a0535e2bb768fb5fb01eb2153fb7bb2cdec313c193bbfc33482ae55dfe3e5`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
