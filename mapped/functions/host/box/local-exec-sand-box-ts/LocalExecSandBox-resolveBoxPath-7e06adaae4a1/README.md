# `LocalExecSandBox.resolveBoxPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `host/box/local-exec-sand-box.ts` · [README do módulo](../../../../../modules/host/box/local-exec-sand-box-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:627109-627111](../../../../../../reference/runtime/sand-eval-runner.cjs#L627109-L627111) | `method` | não | `boxPath` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:627109-627111](../../../../../../reference/runtime/sand-eval-runner.cjs#L627109-L627111) | 1 | 0 | 0 | 1 | 0 | 0 |

### evaluation:627109

Chamadas escritas diretamente neste corpo: `resolveProjectDir`.

SHA-256 do trecho: `bacdd95ba56ed5ef2d27eed5f5a5c44f209d6180b4f54f387d66ce4f83360700`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
