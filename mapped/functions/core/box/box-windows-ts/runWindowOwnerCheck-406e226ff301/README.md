# `runWindowOwnerCheck`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/box-windows.ts` · [README do módulo](../../../../../modules/core/box/box-windows-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:554147-554167](../../../../../../reference/runtime/host-main.cjs#L554147-L554167) | `FunctionDeclaration` | sim | `ctx, accessor, windowIndex, ownerToken` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:554147-554167](../../../../../../reference/runtime/host-main.cjs#L554147-L554167) | 2 | 0 | 1 | 2 | 1 | 0 |

### host:554147

Chamadas escritas diretamente neste corpo: `SAND_BOX_WINDOW_OWNER_TOKEN_PATTERN.test`, `accessor.get`, `buildHostShellArgs`, `isPrimaryWindowIndex`, `new SandBoxWindowError`, `readWindowToken`, `shell.execute`, `underWindowLock`.

Alvos de lançamento explícito: `SandBoxWindowError`.

SHA-256 do trecho: `724384fc70b3d06ec26a9945e68fe0ce13dd4c1c556fe2c13f0b8a6f5fac4964`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
