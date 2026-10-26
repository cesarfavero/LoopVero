# `SharedDesktopSandBox.listBoxes`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/box/shared-desktop-sand-box.ts` · [README do módulo](../../../../../modules/core/box/shared-desktop-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:555183-555187](../../../../../../reference/runtime/host-main.cjs#L555183-L555187) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:555183-555187](../../../../../../reference/runtime/host-main.cjs#L555183-L555187) | 0 | 0 | 1 | 1 | 0 | 0 |

### host:555183

Chamadas escritas diretamente neste corpo: `.map`, `innerBoxes.some`, `this.agentWindows.keys`, `this.inner.listBoxes`.

SHA-256 do trecho: `5fcadfc456220c6bdbe5b0950fe4f1e681f5b5aa876c5f552ae43260f8bb33b8`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
