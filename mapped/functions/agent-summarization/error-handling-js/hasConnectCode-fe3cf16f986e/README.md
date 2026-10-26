# `hasConnectCode`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/error-handling.js` · [README do módulo](../../../../modules/agent-summarization/error-handling-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620152-620159](../../../../../reference/runtime/host-main.cjs#L620152-L620159) | `FunctionDeclaration` | não | `error64, targetCode` |
| [evaluation:304506-304513](../../../../../reference/runtime/sand-eval-runner.cjs#L304506-L304513) | `FunctionDeclaration` | não | `error63, targetCode` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620152-620159](../../../../../reference/runtime/host-main.cjs#L620152-L620159) | 1 | 1 | 0 | 2 | 0 | 0 |
| [evaluation:304506-304513](../../../../../reference/runtime/sand-eval-runner.cjs#L304506-L304513) | 1 | 1 | 0 | 2 | 0 | 0 |

### host:620152

Chamadas escritas diretamente neste corpo: `iterateErrorChain`.

SHA-256 do trecho: `d3c98ca8f76b1ac6a0b2df9585785fbd845faa06795dfac9ab2396b111a4b88c`.

### evaluation:304506

Chamadas escritas diretamente neste corpo: `iterateErrorChain`.

SHA-256 do trecho: `605ba4389b4d5b52b4bc83a2cc5ca7f1dabb019d020fb869b21e0e3f6bb717c1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
