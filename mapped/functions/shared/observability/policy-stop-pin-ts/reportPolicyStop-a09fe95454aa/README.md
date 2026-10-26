# `reportPolicyStop`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/observability/policy-stop-pin.ts` · [README do módulo](../../../../../modules/shared/observability/policy-stop-pin-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:431035-431041](../../../../../../reference/runtime/host-main.cjs#L431035-L431041) | `FunctionDeclaration` | não | `stop` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:431035-431041](../../../../../../reference/runtime/host-main.cjs#L431035-L431041) | 1 | 0 | 0 | 0 | 0 | 0 |

### host:431035

Chamadas escritas diretamente neste corpo: `ERROR_CLASS_TOKEN.test`, `policyStopPin.report`.

SHA-256 do trecho: `35660bbe316e7bc3d246957eef1eb92a3f77b6f3d7eaeceaefe49060bcbed046`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
