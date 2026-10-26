# `errorTextIncludes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620136-620151](../../../../../reference/runtime/host-main.cjs#L620136-L620151) | `FunctionDeclaration` | não | `error64, needle` |
| [evaluation:304490-304505](../../../../../reference/runtime/sand-eval-runner.cjs#L304490-L304505) | `FunctionDeclaration` | não | `error63, needle` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620136-620151](../../../../../reference/runtime/host-main.cjs#L620136-L620151) | 3 | 1 | 0 | 3 | 0 | 0 |
| [evaluation:304490-304505](../../../../../reference/runtime/sand-eval-runner.cjs#L304490-L304505) | 3 | 1 | 0 | 3 | 0 | 0 |

### host:620136

Chamadas escritas diretamente neste corpo: `.includes`, `current2.message.toLowerCase`, `internalMessage.toLowerCase`, `iterateErrorChain`, `needle.toLowerCase`.

SHA-256 do trecho: `92d8d620c68ac1da37c9d7d20ea52dea37a9e0bc3699b52b340517ed052998ee`.

### evaluation:304490

Chamadas escritas diretamente neste corpo: `.includes`, `current2.message.toLowerCase`, `internalMessage.toLowerCase`, `iterateErrorChain`, `needle.toLowerCase`.

SHA-256 do trecho: `e2110bed33e90c2bb5234ac17904dc8104bfbd1e0947e0b9dac96e683af430aa`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
