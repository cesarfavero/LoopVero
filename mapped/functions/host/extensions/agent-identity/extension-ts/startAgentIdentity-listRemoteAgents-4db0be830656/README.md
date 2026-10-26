# `startAgentIdentity/listRemoteAgents`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/agent-identity/extension.ts` · [README do módulo](../../../../../../modules/host/extensions/agent-identity/extension-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496708-496711](../../../../../../../reference/runtime/host-main.cjs#L496708-L496711) | `ArrowFunctionExpression` | sim | `signal` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496708-496711](../../../../../../../reference/runtime/host-main.cjs#L496708-L496711) | 1 | 0 | 1 | 1 | 0 | 0 |

### host:496708

Chamadas escritas diretamente neste corpo: `Object.assign`, `client.listGrokBotAgents`.

SHA-256 do trecho: `b804966aaa7b8f3405d56489f07612eb99b8ce1a24bb3fca24449e95103626ac`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
