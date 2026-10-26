# `triggerIdentity`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `core/automations/automation-trigger.ts` · [README do módulo](../../../../../modules/core/automations/automation-trigger-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:716445-716447](../../../../../../reference/runtime/host-main.cjs#L716445-L716447) | `FunctionDeclaration` | não | `trigger2` |
| [evaluation:528128-528130](../../../../../../reference/runtime/sand-eval-runner.cjs#L528128-L528130) | `FunctionDeclaration` | não | `trigger` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:716445-716447](../../../../../../reference/runtime/host-main.cjs#L716445-L716447) | 1 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:528128-528130](../../../../../../reference/runtime/sand-eval-runner.cjs#L528128-L528130) | 1 | 0 | 0 | 1 | 0 | 0 |

### host:716445

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `serializeStoredTrigger`.

SHA-256 do trecho: `d8af1467eb2895cd61533e4058056d3ba5d665ff8e5a5acd8d86ef2178643f27`.

### evaluation:528128

Chamadas escritas diretamente neste corpo: `JSON.stringify`, `serializeStoredTrigger`.

SHA-256 do trecho: `f530a90d8d3591236fcef39e3170c1c6d910a323d19be4a6124b3804323536b1`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
