# `runParkWindow`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554029-554073](../../../../../../reference/runtime/host-main.cjs#L554029-L554073) | `FunctionDeclaration` | sim | `ctx, accessor, windowIndex, ownerToken, opts` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554029-554073](../../../../../../reference/runtime/host-main.cjs#L554029-L554073) | 6 | 0 | 1 | 2 | 5 | 0 |

### host:554029

Chamadas escritas diretamente neste corpo: `.execute`, `BOX_FILE_PATH_PATTERN.test`, `Number.isInteger`, `PARK_OUTCOME_BY_EXIT_CODE.get`, `SAND_BOX_WINDOW_OWNER_TOKEN_PATTERN.test`, `accessor.get`, `buildHostShellArgs`, `isPrimaryWindowIndex`, `new SandBoxParkWindowError`, `parkWindowCommand`.

Alvos de lançamento explícito: `SandBoxParkWindowError`.

SHA-256 do trecho: `87ab0b7295630c4fa3319270ef1221fbfb4b57497510d149032465ec2291d30a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
