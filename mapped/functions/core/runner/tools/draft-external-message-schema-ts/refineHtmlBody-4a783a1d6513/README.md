# `refineHtmlBody`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../../guide/components/tools/README.md).

**Módulo:** `core/runner/tools/draft-external-message-schema.ts` · [README do módulo](../../../../../../modules/core/runner/tools/draft-external-message-schema-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [host:755085-755102](../../../../../../../reference/runtime/host-main.cjs#L755085-L755102) | `FunctionDeclaration` | não | `html, body, ctx` |
| [evaluation:539710-539727](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539710-L539727) | `FunctionDeclaration` | não | `html, body, ctx` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [host:755085-755102](../../../../../../../reference/runtime/host-main.cjs#L755085-L755102) | 2 | 0 | 0 | 1 | 0 | 0 |
| [evaluation:539710-539727](../../../../../../../reference/runtime/sand-eval-runner.cjs#L539710-L539727) | 2 | 0 | 0 | 1 | 0 | 0 |

### host:755085

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `emailHtmlMatchesBody`, `emailHtmlNonTextTag`.

SHA-256 do trecho: `f88d607baf94cb02d21f20a46b3235faac92662b840b8f24ec6ba7393d960c51`.

### evaluation:539710

Chamadas escritas diretamente neste corpo: `ctx.addIssue`, `emailHtmlMatchesBody`, `emailHtmlNonTextTag`.

SHA-256 do trecho: `da9aecf2f92e790d6582c32ab8df3f81851d9c8f6e250a7a02981615f0e2a4e6`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../../guide/methodology/README.md).
