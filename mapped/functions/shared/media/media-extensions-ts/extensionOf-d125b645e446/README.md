# `extensionOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/media-extensions.ts` · [README do módulo](../../../../../modules/shared/media/media-extensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:496971-496975](../../../../../../reference/runtime/host-main.cjs#L496971-L496975) | `FunctionDeclaration` | não | `name18` |
| [evaluation:480734-480738](../../../../../../reference/runtime/sand-eval-runner.cjs#L480734-L480738) | `FunctionDeclaration` | não | `name18` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:496971-496975](../../../../../../reference/runtime/host-main.cjs#L496971-L496975) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:480734-480738](../../../../../../reference/runtime/sand-eval-runner.cjs#L480734-L480738) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:496971

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `Math.max`, `base.lastIndexOf`, `base.slice`, `name18.lastIndexOf`, `name18.slice`.

SHA-256 do trecho: `303fff808b3fb7e70206c7b0bfdf4def5960796c9bb79baddaa6ee46efed9e0f`.

### evaluation:480734

Chamadas escritas diretamente neste corpo: `.toLowerCase`, `Math.max`, `base.lastIndexOf`, `base.slice`, `name18.lastIndexOf`, `name18.slice`.

SHA-256 do trecho: `303fff808b3fb7e70206c7b0bfdf4def5960796c9bb79baddaa6ee46efed9e0f`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
