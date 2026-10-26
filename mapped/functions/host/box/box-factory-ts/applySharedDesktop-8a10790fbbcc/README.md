# `applySharedDesktop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/box-factory.ts` · [README do módulo](../../../../../modules/host/box/box-factory-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679621-679624](../../../../../../reference/runtime/host-main.cjs#L679621-L679624) | `FunctionDeclaration` | não | `box, options2 = {}` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679621-679624](../../../../../../reference/runtime/host-main.cjs#L679621-L679624) | 1 | 0 | 0 | 2 | 0 | 0 |

### host:679621

Chamadas escritas diretamente neste corpo: `boxMaxWindows`, `new SharedDesktopSandBox`.

SHA-256 do trecho: `c3858d0cc15a5abf7e88c009116f587d275cb04ced75d3bb7f87a9ae5a19408a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
