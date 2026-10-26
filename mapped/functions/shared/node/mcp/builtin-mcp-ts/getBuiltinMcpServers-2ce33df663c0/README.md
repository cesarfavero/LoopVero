# `getBuiltinMcpServers`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/builtin-mcp.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/builtin-mcp-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:451508-451529](../../../../../../../reference/runtime/host-main.cjs#L451508-L451529) | `FunctionDeclaration` | não | `environment` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:451508-451529](../../../../../../../reference/runtime/host-main.cjs#L451508-L451529) | 3 | 0 | 0 | 3 | 0 | 0 |

### host:451508

Chamadas escritas diretamente neste corpo: `buildBoxComputerEnv`, `resolveBoxComputerNodeCommand`.

Alvos de atribuição ou incremento: `env.ELECTRON_RUN_AS_NODE`.

SHA-256 do trecho: `3a0018f7445861a5af003559bb2fa36320d29d55fefa938fbf2c49eb898df0a1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
