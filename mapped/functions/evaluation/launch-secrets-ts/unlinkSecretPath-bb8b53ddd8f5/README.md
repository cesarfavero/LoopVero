# `unlinkSecretPath`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/launch-secrets.ts` · [README do módulo](../../../../modules/evaluation/launch-secrets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630631-630641](../../../../../reference/runtime/sand-eval-runner.cjs#L630631-L630641) | `FunctionDeclaration` | sim | `path33, missingIsOk` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630631-630641](../../../../../reference/runtime/sand-eval-runner.cjs#L630631-L630641) | 2 | 0 | 1 | 2 | 1 | 1 |

### evaluation:630631

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `path33.startsWith`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `1ef7a442dfab84cbc799f86215fe00ae99428b26da9ddf55d11663a3c13247d4`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
