# `withoutForeignMountEntries`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/architecture/README.md).

**Módulo:** `host/extensions/box-store-sync/box-store-download.ts` · [README do módulo](../../../../../../modules/host/extensions/box-store-sync/box-store-download-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:477513-477524](../../../../../../../reference/runtime/host-main.cjs#L477513-L477524) | `FunctionDeclaration` | não | `manifest, log5` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:477513-477524](../../../../../../../reference/runtime/host-main.cjs#L477513-L477524) | 2 | 1 | 0 | 1 | 0 | 0 |

### host:477513

Chamadas escritas diretamente neste corpo: `isBoxHomeForeignMountPath`, `kept.set`, `log5`, `new Map`, `skipped2.toString`.

Alvos de atribuição ou incremento: `skipped2`.

SHA-256 do trecho: `a7d749f6927ea69ffb9192655e0b9db7ede76e7b187b73136670576be94a51e0`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
