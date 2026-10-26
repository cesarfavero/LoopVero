# `isHttpExternalUrl`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/architecture/README.md).

**Módulo:** `shared/desktop/external-url-policy.ts` · [README do módulo](../../../../../modules/shared/desktop/external-url-policy-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:486752-486755](../../../../../../reference/runtime/host-main.cjs#L486752-L486755) | `FunctionDeclaration` | não | `value` |
| [evaluation:495063-495066](../../../../../../reference/runtime/sand-eval-runner.cjs#L495063-L495066) | `FunctionDeclaration` | não | `value` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:486752-486755](../../../../../../reference/runtime/host-main.cjs#L486752-L486755) | 0 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:495063-495066](../../../../../../reference/runtime/sand-eval-runner.cjs#L495063-L495066) | 0 | 0 | 0 | 1 | 0 | 0 |

### host:486752

Chamadas escritas diretamente neste corpo: `externalUrl`.

SHA-256 do trecho: `3aca290c6612716adec25572738900164ed433ac5d01facbd6101935b86354cb`.

### evaluation:495063

Chamadas escritas diretamente neste corpo: `externalUrl`.

SHA-256 do trecho: `3aca290c6612716adec25572738900164ed433ac5d01facbd6101935b86354cb`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
