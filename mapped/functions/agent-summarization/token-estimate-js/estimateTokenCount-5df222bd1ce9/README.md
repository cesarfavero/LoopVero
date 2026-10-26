# `estimateTokenCount`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/components/context-compaction/README.md).

**Módulo:** `agent-summarization/token-estimate.js` · [README do módulo](../../../../modules/agent-summarization/token-estimate-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:620673-620693](../../../../../reference/runtime/host-main.cjs#L620673-L620693) | `FunctionDeclaration` | não | `messages2, options2` |
| [evaluation:305027-305047](../../../../../reference/runtime/sand-eval-runner.cjs#L305027-L305047) | `FunctionDeclaration` | não | `messages, options2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:620673-620693](../../../../../reference/runtime/host-main.cjs#L620673-L620693) | 3 | 2 | 0 | 1 | 0 | 0 |
| [evaluation:305027-305047](../../../../../reference/runtime/sand-eval-runner.cjs#L305027-L305047) | 3 | 2 | 0 | 1 | 0 | 0 |

### host:620673

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Math.ceil`, `estimatePartChars`, `getTextLen`, `isRedactedString`.

Alvos de atribuição ou incremento: `totalChars`.

SHA-256 do trecho: `4f230b1bfbf73802378e8360aaff87ab63bad5e534f3379f98f57c00fc26818d`.

### evaluation:305027

Chamadas escritas diretamente neste corpo: `Array.isArray`, `Math.ceil`, `estimatePartChars`, `getTextLen`, `isRedactedString`.

Alvos de atribuição ou incremento: `totalChars`.

SHA-256 do trecho: `4de23693d7f49b94a6c44c1cc369d606b588dd5c7ca645f9fa997590bfe82727`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
