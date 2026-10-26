# `ownEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/mcp/mcp-tool-permissions.ts` · [README do módulo](../../../../../modules/shared/mcp/mcp-tool-permissions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:686904-686906](../../../../../../reference/runtime/host-main.cjs#L686904-L686906) | `FunctionDeclaration` | não | `raw, key` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:686904-686906](../../../../../../reference/runtime/host-main.cjs#L686904-L686906) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:686904

Chamadas escritas diretamente neste corpo: `Object.hasOwn`, `isUnknownRecord2`.

SHA-256 do trecho: `ed76237575a6153f9659ce499acdeb6b20fca517316cecce33593ae60873c221`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
