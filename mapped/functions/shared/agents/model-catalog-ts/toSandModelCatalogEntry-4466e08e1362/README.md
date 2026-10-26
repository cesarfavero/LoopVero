# `toSandModelCatalogEntry`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/agents/model-catalog.ts` · [README do módulo](../../../../../modules/shared/agents/model-catalog-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:513577-513608](../../../../../../reference/runtime/host-main.cjs#L513577-L513608) | `FunctionDeclaration` | não | `model` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:513577-513608](../../../../../../reference/runtime/host-main.cjs#L513577-L513608) | 4 | 1 | 0 | 1 | 0 | 0 |

### host:513577

Chamadas escritas diretamente neste corpo: `def.name.trim`, `model.clientDisplayName.trim`, `model.variants.map`, `params.push`, `rawValues.map`.

SHA-256 do trecho: `d7519411ac6b0db6e7c7224bfe2e2075362c714a4a593021a20d69a9bc2e7c71`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
