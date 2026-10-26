# `startAgentIdentity/report`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496811-496811](../../../../../../../reference/runtime/host-main.cjs#L496811-L496811) | `ArrowFunctionExpression` | não | `level, metadata2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496811-496811](../../../../../../../reference/runtime/host-main.cjs#L496811-L496811) | 0 | 0 | 0 | 0 | 0 | 0 |

A ocorrência em host:496811 usa retorno implícito de arrow function.

### host:496811

Chamadas escritas diretamente neste corpo: `context2.deps.telemetry.logs.reportAgentIdentitySync`.

SHA-256 do trecho: `3c1268d06a2bdc00c96a1f3fc563ccdba3a8de73040c828a185a1e020b64f1a9`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
