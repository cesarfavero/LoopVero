# `start/runWindow/<callback>/isServerBound`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/resume-ownership/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/resume-ownership/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:708868-708868](../../../../../../../reference/runtime/host-main.cjs#L708868-L708868) | `ArrowFunctionExpression` | não | `agentId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:708868-708868](../../../../../../../reference/runtime/host-main.cjs#L708868-L708868) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:708868 usa retorno implícito de arrow function.

### host:708868

Chamadas escritas diretamente neste corpo: `isSandAgentServerBound`, `sessionStore.getAgentDir`.

SHA-256 do trecho: `64b9ad7cd4eb2afbdddbf4090ea470ded9f142e6c61736ebb9f98aca41d76d1d`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
