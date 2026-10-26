# `LoopbackSandBox.listBoundForkWindows`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/loopback-sand-box.ts` · [README do módulo](../../../../../modules/host/box/loopback-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:679280-679296](../../../../../../reference/runtime/host-main.cjs#L679280-L679296) | `method` | sim | `(nenhum)` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:679280-679296](../../../../../../reference/runtime/host-main.cjs#L679280-L679296) | 1 | 0 | 1 | 2 | 0 | 1 |

### host:679280

Chamadas escritas diretamente neste corpo: `.filter`, `.map`, `.sort`, `entries.filter`, `errorLogTag`, `isMissingPathError`, `reportHostDiagnosticOrStderr`.

Alvos de atribuição ou incremento: `entries`.

SHA-256 do trecho: `92c8a61b14721815ad2e9f8408054d18ed64270fc7d1dcf9ce64074fe3295fdb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
