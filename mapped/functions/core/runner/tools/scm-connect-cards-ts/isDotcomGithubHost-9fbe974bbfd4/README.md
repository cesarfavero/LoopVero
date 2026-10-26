# `isDotcomGithubHost`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/scm-connect-cards.ts` · [README do módulo](../../../../../../modules/core/runner/tools/scm-connect-cards-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:509179-509182](../../../../../../../reference/runtime/host-main.cjs#L509179-L509182) | `FunctionDeclaration` | não | `host` |
| [evaluation:556904-556907](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556904-L556907) | `FunctionDeclaration` | não | `host` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:509179-509182](../../../../../../../reference/runtime/host-main.cjs#L509179-L509182) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:556904-556907](../../../../../../../reference/runtime/sand-eval-runner.cjs#L556904-L556907) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:509179

Chamadas escritas diretamente neste corpo: `host.toLowerCase`.

SHA-256 do trecho: `07171562d5688c91081caaa60edcee240ac5746b5b9f86fea83063ed24b5dd89`.

### evaluation:556904

Chamadas escritas diretamente neste corpo: `host.toLowerCase`.

SHA-256 do trecho: `07171562d5688c91081caaa60edcee240ac5746b5b9f86fea83063ed24b5dd89`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
