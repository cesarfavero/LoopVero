# `isSandLinearEventCase`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/automations/README.md).

**Módulo:** `shared/automations/automations.ts` · [README do módulo](../../../../../modules/shared/automations/automations-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:485431-485433](../../../../../../reference/runtime/host-main.cjs#L485431-L485433) | `FunctionDeclaration` | não | `value` |
| [evaluation:475163-475165](../../../../../../reference/runtime/sand-eval-runner.cjs#L475163-L475165) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:485431-485433](../../../../../../reference/runtime/host-main.cjs#L485431-L485433) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:475163-475165](../../../../../../reference/runtime/sand-eval-runner.cjs#L475163-L475165) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:485431

Chamadas escritas diretamente neste corpo: `isKeyOf`.

SHA-256 do trecho: `42b8e043c4edd038fe378141df60d16e8da07f25bfc067850d47037e73011151`.

### evaluation:475163

Chamadas escritas diretamente neste corpo: `isKeyOf`.

SHA-256 do trecho: `42b8e043c4edd038fe378141df60d16e8da07f25bfc067850d47037e73011151`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
