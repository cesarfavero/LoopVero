# `turnAttributionFromContext`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/sand-action-audit.ts` · [README do módulo](../../../../../modules/core/runner/sand-action-audit-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:699028-699035](../../../../../../reference/runtime/host-main.cjs#L699028-L699035) | `FunctionDeclaration` | não | `ctx, agentId` |
| [evaluation:512266-512273](../../../../../../reference/runtime/sand-eval-runner.cjs#L512266-L512273) | `FunctionDeclaration` | não | `ctx, agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:699028-699035](../../../../../../reference/runtime/host-main.cjs#L699028-L699035) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:512266-512273](../../../../../../reference/runtime/sand-eval-runner.cjs#L512266-L512273) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:699028

Chamadas escritas diretamente neste corpo: `ctx.get`, `getRootParentRequestId`, `subagentIdFromTurnContext`.

SHA-256 do trecho: `42f9dbb9b89c66a6e4dc491bfea66a7c7596009bc5660bc617b4721a043c25a3`.

### evaluation:512266

Chamadas escritas diretamente neste corpo: `ctx.get`, `getRootParentRequestId`, `subagentIdFromTurnContext`.

SHA-256 do trecho: `97661da2a150443317fca6cd5545380b6360da05477b83682180e9455dcd9e0f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
