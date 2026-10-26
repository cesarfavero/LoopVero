# `closeInheritedFd`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../guide/architecture/README.md).

**Módulo:** `evaluation/launch-secrets.ts` · [README do módulo](../../../../modules/evaluation/launch-secrets-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:630642-630651](../../../../../reference/runtime/sand-eval-runner.cjs#L630642-L630651) | `FunctionDeclaration` | não | `path33` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:630642-630651](../../../../../reference/runtime/sand-eval-runner.cjs#L630642-L630651) | 2 | 0 | 0 | 2 | 1 | 1 |

### evaluation:630642

Chamadas escritas diretamente neste corpo: `findSystemErrno`, `inheritedFd`.

Alvos de lançamento explícito: `error63`.

SHA-256 do trecho: `8990dbf653468d7db150f6d056a0da804c3a3a0e9e4eeb4ee2d0b1b960878012`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../guide/methodology/README.md).
