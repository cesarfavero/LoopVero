# `goalElapsedMsFrom`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `agent-core/goal-continuation.js` · [README do módulo](../../../../modules/agent-core/goal-continuation-js/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:475451-475456](../../../../../reference/runtime/host-main.cjs#L475451-L475456) | `FunctionDeclaration` | não | `accruedMs, accrualAnchorMs, nowMs2` |
| [evaluation:254671-254676](../../../../../reference/runtime/sand-eval-runner.cjs#L254671-L254676) | `FunctionDeclaration` | não | `accruedMs, accrualAnchorMs, nowMs` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:475451-475456](../../../../../reference/runtime/host-main.cjs#L475451-L475456) | 1 | 0 | 0 | 2 | 0 | 0 |
| [evaluation:254671-254676](../../../../../reference/runtime/sand-eval-runner.cjs#L254671-L254676) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:475451

Chamadas escritas diretamente neste corpo: `Math.max`.

SHA-256 do trecho: `5deffa68720830c1a56354b15b0ffe4515bb3cdb5a84ee5a8e44d73e7001dd20`.

### evaluation:254671

Chamadas escritas diretamente neste corpo: `Math.max`.

SHA-256 do trecho: `31b4c2331917cc0f399ee2ae28b5c26d03ab99161e6325d479ddf482f7e30e2e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
