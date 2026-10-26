# `getUserMessageText`

Ficha estática do código original. O fluxo completo e suas condições são explicados no [guia do componente](../../../../../../guide/components/turns/README.md).

**Módulo:** `core/runner/send-message-reminder-middleware.ts` · [README do módulo](../../../../../modules/core/runner/send-message-reminder-middleware-ts/README.md)

## Implementação e entradas

| Artefato e linhas | Forma | Assíncrona | Parâmetros recuperados |
| --- | --- | --- | --- |
| [evaluation:483082-483092](../../../../../../reference/runtime/sand-eval-runner.cjs#L483082-L483092) | `FunctionDeclaration` | não | `message` |

## Fluxo observado no corpo

| Artefato | Decisões sintáticas | Laços | await | return explícito | throw | catch |
| --- | ---: | ---: | ---: | ---: | ---: | ---: |
| [evaluation:483082-483092](../../../../../../reference/runtime/sand-eval-runner.cjs#L483082-L483092) | 2 | 0 | 0 | 3 | 0 | 0 |

### evaluation:483082

Chamadas escritas diretamente neste corpo: `.join`, `.map`, `message.content.filter`.

SHA-256 do trecho: `a76bcc1fa1e60441652ec46a1660b4ef12c569161e05b52af7a61e53bfa34f02`.

## Como interpretar

Os links abrem a implementação completa, incluindo condições, valores de retorno e tratamento de falhas. Contagens excluem corpos de funções internas. Chamadas são referências sintáticas: não resolvem despacho dinâmico, aliases, permissões nem provam execução em produção. Atribuições não cobrem todas as mutações realizadas por métodos chamados. Nomes repetidos no mesmo escopo agrupam ocorrências; diferenças entre os bundles não são substituídas por uma versão presumida.

[Método e limites do catálogo](../../../../../../guide/methodology/README.md).
