# `uniqueBoundedConnectors`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/integrations/README.md).

**Módulo:** `shared/node/mcp/mcp-discovery-progress.ts` · [README do módulo](../../../../../../modules/shared/node/mcp/mcp-discovery-progress-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:690645-690647](../../../../../../../reference/runtime/host-main.cjs#L690645-L690647) | `FunctionDeclaration` | não | `identifiers` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:690645-690647](../../../../../../../reference/runtime/host-main.cjs#L690645-L690647) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:690645

Chamadas escritas diretamente neste corpo: `.sort`, `identifiers.map`, `new Set`.

SHA-256 do trecho: `eb9fdf335e265c3776fc50c81a2c5eeeb0f9a3c53a4b5018c4143f508d4bf45e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
