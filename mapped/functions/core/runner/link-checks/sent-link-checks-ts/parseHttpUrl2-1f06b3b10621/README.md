# `parseHttpUrl2`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/link-checks/sent-link-checks.ts` · [README do módulo](../../../../../../modules/core/runner/link-checks/sent-link-checks-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:583412-583422](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583412-L583422) | `FunctionDeclaration` | não | `raw` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:583412-583422](../../../../../../../reference/runtime/sand-eval-runner.cjs#L583412-L583422) | 3 | 0 | 0 | 3 | 0 | 1 |

### evaluation:583412

Chamadas escritas diretamente neste corpo: `/^[a-z][a-z0-9+.-]*:/i.test`, `new URL`, `raw.trim`.

Alvos de atribuição ou incremento: `url2`.

SHA-256 do trecho: `0836c49a2e4eeb3b0b262fdc57ac106130cfc39223d1c3129242f6b911ce98d1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
