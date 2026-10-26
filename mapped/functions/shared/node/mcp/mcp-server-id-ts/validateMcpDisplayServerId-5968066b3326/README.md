# `validateMcpDisplayServerId`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-server-id.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-server-id-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:685172-685181](../../../../../../../reference/runtime/host-main.cjs#L685172-L685181) | `FunctionDeclaration` | não | `rawId` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:685172-685181](../../../../../../../reference/runtime/host-main.cjs#L685172-L685181) | 2 | 0 | 0 | 2 | 1 | 0 |

### host:685172

Chamadas escritas diretamente neste corpo: `isGrokDisplayServerId`, `isMcpListingServerId`, `new SandMcpConfigError`, `rawId.trim`.

Alvos de lançamento explícito: `SandMcpConfigError`.

SHA-256 do trecho: `66bd613b1df08c44dc4f6dc30af534e7471bcdd2abd4c278e4104dc2795d7dd2`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
