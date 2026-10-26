# `groupsOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/tools/README.md).

**Módulo:** `core/device-local-tools/ios-control-home.ts` · [README do módulo](../../../../../modules/core/device-local-tools/ios-control-home-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:758728-758739](../../../../../../reference/runtime/host-main.cjs#L758728-L758739) | `FunctionDeclaration` | não | `changes, keyOf` |
| [evaluation:548888-548899](../../../../../../reference/runtime/sand-eval-runner.cjs#L548888-L548899) | `FunctionDeclaration` | não | `changes, keyOf` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:758728-758739](../../../../../../reference/runtime/host-main.cjs#L758728-L758739) | 0 | 1 | 0 | 1 | 0 | 0 |
| [evaluation:548888-548899](../../../../../../reference/runtime/sand-eval-runner.cjs#L548888-L548899) | 0 | 1 | 0 | 1 | 0 | 0 |

### host:758728

Chamadas escritas diretamente neste corpo: `groups.get`, `groups.set`, `groups.values`, `keyOf`, `new Map`.

SHA-256 do trecho: `6cd54226633414dad497a8ef700878de7ed08bc4c75ac56a2461fde7a04d9e58`.

### evaluation:548888

Chamadas escritas diretamente neste corpo: `groups.get`, `groups.set`, `groups.values`, `keyOf`, `new Map`.

SHA-256 do trecho: `6cd54226633414dad497a8ef700878de7ed08bc4c75ac56a2461fde7a04d9e58`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
