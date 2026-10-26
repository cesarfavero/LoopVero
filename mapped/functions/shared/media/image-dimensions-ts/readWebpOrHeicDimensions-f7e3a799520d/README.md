# `readWebpOrHeicDimensions`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/media/image-dimensions.ts` · [README do módulo](../../../../../modules/shared/media/image-dimensions-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:497475-497477](../../../../../../reference/runtime/host-main.cjs#L497475-L497477) | `FunctionDeclaration` | não | `buffer` |
| [evaluation:515170-515172](../../../../../../reference/runtime/sand-eval-runner.cjs#L515170-L515172) | `FunctionDeclaration` | não | `buffer` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:497475-497477](../../../../../../reference/runtime/host-main.cjs#L497475-L497477) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:515170-515172](../../../../../../reference/runtime/sand-eval-runner.cjs#L515170-L515172) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:497475

Chamadas escritas diretamente neste corpo: `HeicDimensions.read`, `readWebpDimensions2`.

SHA-256 do trecho: `5173518f1924b7e2fa0e4ad19bec6100251eb70445194e8bee12ecb5f82ba48e`.

### evaluation:515170

Chamadas escritas diretamente neste corpo: `HeicDimensions.read`, `readWebpDimensions2`.

SHA-256 do trecho: `5173518f1924b7e2fa0e4ad19bec6100251eb70445194e8bee12ecb5f82ba48e`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
