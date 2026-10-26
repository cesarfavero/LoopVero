# `platformIndependentPosixPathOf`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `core/store/attachment-alias.ts` · [README do módulo](../../../../../modules/core/store/attachment-alias-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:759610-759616](../../../../../../reference/runtime/host-main.cjs#L759610-L759616) | `FunctionDeclaration` | não | `url2` |
| [evaluation:549778-549784](../../../../../../reference/runtime/sand-eval-runner.cjs#L549778-L549784) | `FunctionDeclaration` | não | `url2` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:759610-759616](../../../../../../reference/runtime/host-main.cjs#L759610-L759616) | 0 | 0 | 0 | 2 | 0 | 1 |
| [evaluation:549778-549784](../../../../../../reference/runtime/sand-eval-runner.cjs#L549778-L549784) | 0 | 0 | 0 | 2 | 0 | 1 |

### host:759610

Chamadas escritas diretamente neste corpo: `decodeURIComponent`.

SHA-256 do trecho: `433f8dd068721dbf8cab8aa483c2e4078739947690b2f45038a45cd86f41f145`.

### evaluation:549778

Chamadas escritas diretamente neste corpo: `decodeURIComponent`.

SHA-256 do trecho: `433f8dd068721dbf8cab8aa483c2e4078739947690b2f45038a45cd86f41f145`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
