# `armScmConnectWaits`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509254-509276](../../../../../../../reference/runtime/host-main.cjs#L509254-L509276) | `FunctionDeclaration` | sim | `card, registerScmConnectWait` |
| [evaluation:556979-557001](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556979-L557001) | `FunctionDeclaration` | sim | `card, registerScmConnectWait` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509254-509276](../../../../../../../reference/runtime/host-main.cjs#L509254-L509276) | 3 | 1 | 1 | 2 | 0 | 1 |
| [evaluation:556979-557001](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556979-L557001) | 3 | 1 | 1 | 2 | 0 | 1 |

### host:509254

Chamadas escritas diretamente neste corpo: `DASHBOARD_CONNECTABLE_PROVIDERS.find`, `errorClassOf`, `registerScmConnectWait`, `reportHostDiagnostic`.

SHA-256 do trecho: `b5b58d9acf5441891b6861e375eb0a4d781d7913acca39a4e7970d12bd847ef5`.

### evaluation:556979

Chamadas escritas diretamente neste corpo: `DASHBOARD_CONNECTABLE_PROVIDERS.find`, `errorClassOf`, `registerScmConnectWait`, `reportHostDiagnostic`.

SHA-256 do trecho: `0ffa1069d5ff491523721b3990f99dd9b99c33157fcc5e32b7553d9111acfc4b`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
