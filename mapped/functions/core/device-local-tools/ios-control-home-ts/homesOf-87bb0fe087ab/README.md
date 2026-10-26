# `homesOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/ios-control-home.ts` · [README do módulo](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758758-758761](../../../../../../reference/runtime/host-main.cjs#L758758-L758761) | `FunctionDeclaration` | não | `changes` |
| [evaluation:548918-548921](../../../../../../reference/runtime/sand-eval-runner.cjs#L548918-L548921) | `FunctionDeclaration` | não | `changes` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758758-758761](../../../../../../reference/runtime/host-main.cjs#L758758-L758761) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:548918-548921](../../../../../../reference/runtime/sand-eval-runner.cjs#L548918-L548921) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:758758

Chamadas escritas diretamente neste corpo: `changes.flatMap`, `homes.map`, `listOf3`, `new Set`.

SHA-256 do trecho: `4f68e00d7056f09abbe94c90cf58de2cebe5eed0d2e3459d317222c8489acc1a`.

### evaluation:548918

Chamadas escritas diretamente neste corpo: `changes.flatMap`, `homes.map`, `listOf3`, `new Set`.

SHA-256 do trecho: `4f68e00d7056f09abbe94c90cf58de2cebe5eed0d2e3459d317222c8489acc1a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
