# `stripSpotlightTag`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/spotlight/sand-spotlight.ts` · [README do módulo](../../../../../modules/shared/spotlight/sand-spotlight-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:761627-761629](../../../../../../reference/runtime/host-main.cjs#L761627-L761629) | `FunctionDeclaration` | não | `text3` |
| [evaluation:552442-552444](../../../../../../reference/runtime/sand-eval-runner.cjs#L552442-L552444) | `FunctionDeclaration` | não | `text3` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:761627-761629](../../../../../../reference/runtime/host-main.cjs#L761627-L761629) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:552442-552444](../../../../../../reference/runtime/sand-eval-runner.cjs#L552442-L552444) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:761627

Chamadas escritas diretamente neste corpo: `text3.replace`.

SHA-256 do trecho: `3637a4fdb0e821ff126bfa1d0e7014192a1e57ff7820b060c5e2d077f1364a6a`.

### evaluation:552442

Chamadas escritas diretamente neste corpo: `text3.replace`.

SHA-256 do trecho: `3637a4fdb0e821ff126bfa1d0e7014192a1e57ff7820b060c5e2d077f1364a6a`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
